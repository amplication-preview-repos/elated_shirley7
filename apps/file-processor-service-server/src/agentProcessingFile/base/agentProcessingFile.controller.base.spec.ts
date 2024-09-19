import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AgentProcessingFileController } from "../agentProcessingFile.controller";
import { AgentProcessingFileService } from "../agentProcessingFile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  agentId: "exampleAgentId",
  createdAt: new Date(),
  fileName: "exampleFileName",
  id: "exampleId",
  processingDate: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  agentId: "exampleAgentId",
  createdAt: new Date(),
  fileName: "exampleFileName",
  id: "exampleId",
  processingDate: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    agentId: "exampleAgentId",
    createdAt: new Date(),
    fileName: "exampleFileName",
    id: "exampleId",
    processingDate: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  agentId: "exampleAgentId",
  createdAt: new Date(),
  fileName: "exampleFileName",
  id: "exampleId",
  processingDate: new Date(),
  updatedAt: new Date(),
};

const service = {
  createAgentProcessingFile() {
    return CREATE_RESULT;
  },
  agentProcessingFiles: () => FIND_MANY_RESULT,
  agentProcessingFile: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AgentProcessingFile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AgentProcessingFileService,
          useValue: service,
        },
      ],
      controllers: [AgentProcessingFileController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /agentProcessingFiles", async () => {
    await request(app.getHttpServer())
      .post("/agentProcessingFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        processingDate: CREATE_RESULT.processingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /agentProcessingFiles", async () => {
    await request(app.getHttpServer())
      .get("/agentProcessingFiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          processingDate: FIND_MANY_RESULT[0].processingDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /agentProcessingFiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/agentProcessingFiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /agentProcessingFiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/agentProcessingFiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        processingDate: FIND_ONE_RESULT.processingDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /agentProcessingFiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/agentProcessingFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        processingDate: CREATE_RESULT.processingDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/agentProcessingFiles")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

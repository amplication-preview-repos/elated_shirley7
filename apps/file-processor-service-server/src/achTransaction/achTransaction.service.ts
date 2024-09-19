import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AchTransactionServiceBase } from "./base/achTransaction.service.base";

@Injectable()
export class AchTransactionService extends AchTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

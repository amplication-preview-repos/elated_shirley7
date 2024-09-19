/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FileTemplateWhereInput } from "./FileTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FileTemplateOrderByInput } from "./FileTemplateOrderByInput";

@ArgsType()
class FileTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FileTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FileTemplateWhereInput, { nullable: true })
  @Type(() => FileTemplateWhereInput)
  where?: FileTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [FileTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FileTemplateOrderByInput], { nullable: true })
  @Type(() => FileTemplateOrderByInput)
  orderBy?: Array<FileTemplateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FileTemplateFindManyArgs as FileTemplateFindManyArgs };

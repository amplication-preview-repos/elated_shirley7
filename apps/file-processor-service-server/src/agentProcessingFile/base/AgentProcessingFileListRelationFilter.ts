/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentProcessingFileWhereInput } from "./AgentProcessingFileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AgentProcessingFileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AgentProcessingFileWhereInput,
  })
  @ValidateNested()
  @Type(() => AgentProcessingFileWhereInput)
  @IsOptional()
  @Field(() => AgentProcessingFileWhereInput, {
    nullable: true,
  })
  every?: AgentProcessingFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgentProcessingFileWhereInput,
  })
  @ValidateNested()
  @Type(() => AgentProcessingFileWhereInput)
  @IsOptional()
  @Field(() => AgentProcessingFileWhereInput, {
    nullable: true,
  })
  some?: AgentProcessingFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => AgentProcessingFileWhereInput,
  })
  @ValidateNested()
  @Type(() => AgentProcessingFileWhereInput)
  @IsOptional()
  @Field(() => AgentProcessingFileWhereInput, {
    nullable: true,
  })
  none?: AgentProcessingFileWhereInput;
}
export { AgentProcessingFileListRelationFilter as AgentProcessingFileListRelationFilter };

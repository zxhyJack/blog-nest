import { IsNotEmpty } from "class-validator";

export class AddBlogDto {
  @IsNotEmpty()  
  title: string;

  @IsNotEmpty()
  content: string;

  abstract: string;

  label: string;
}
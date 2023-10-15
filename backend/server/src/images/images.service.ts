import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImagesServiceBase } from "./base/images.service.base";

@Injectable()
export class ImagesService extends ImagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

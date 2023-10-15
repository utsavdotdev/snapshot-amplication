import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImagesModuleBase } from "./base/images.module.base";
import { ImagesService } from "./images.service";
import { ImagesController } from "./images.controller";
import { ImagesResolver } from "./images.resolver";

@Module({
  imports: [ImagesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImagesController],
  providers: [ImagesService, ImagesResolver],
  exports: [ImagesService],
})
export class ImagesModule {}

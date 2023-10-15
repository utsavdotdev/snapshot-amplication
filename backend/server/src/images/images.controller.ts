import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImagesService } from "./images.service";
import { ImagesControllerBase } from "./base/images.controller.base";

@swagger.ApiTags("images")
@common.Controller("images")
export class ImagesController extends ImagesControllerBase {
  constructor(
    protected readonly service: ImagesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

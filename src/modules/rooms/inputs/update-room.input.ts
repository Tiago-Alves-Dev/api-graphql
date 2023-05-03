import { CreateRoomInput } from './create-room.input';
import { InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoomInput extends PartialType(
  OmitType(CreateRoomInput, [
    'roomId',
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'deletedAt',
    'deletedBy',
  ] as const),
) {}

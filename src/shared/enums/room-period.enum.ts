import { registerEnumType } from '@nestjs/graphql';

export enum RomPeriodEnum {
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  NIGHT = 'NIGHT',
}

registerEnumType(RomPeriodEnum, {
  name: 'RomPeriodEnum',
});

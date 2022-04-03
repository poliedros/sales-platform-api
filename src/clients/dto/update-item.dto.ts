export class UpdateItemDto {
  readonly _id: string;
  readonly name: string;
  readonly type: string;
  readonly description: string;
  readonly price: number;
  readonly quantity: number;
  readonly image: string;
  readonly label: string;
  readonly note: string;
  readonly code: string;
}

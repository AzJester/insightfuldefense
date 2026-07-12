import {
  retiredContentHeadResponse,
  retiredContentResponse,
} from "../../_lib/retired-content";

export function GET() {
  return retiredContentResponse();
}

export function HEAD() {
  return retiredContentHeadResponse();
}

import * as r from "ramda";

const removeExcerpt = (text: string) =>
  r.pipe(r.split("---\r\n"), r.last)(text) as string;

export default removeExcerpt;

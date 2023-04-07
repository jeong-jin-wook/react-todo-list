/**css module 사용시 모듈 형식 정의 */
declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

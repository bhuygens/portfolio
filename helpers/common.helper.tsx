export class CommonHelper {
  public static Capitalize(str: string) {
    return (str.charAt(0).toUpperCase() + str.slice(1)).replace("_", " ");
  }
}
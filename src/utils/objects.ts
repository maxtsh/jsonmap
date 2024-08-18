export function formatJSONString(value: string, level = 2) {
  let result = value;

  try {
    result = JSON.parse(value) as string;
    result = JSON.stringify(result, null, level);
  } catch (err) {
    if (process.env.NODE_ENV === "development") console.log(err);
    result = value;
  }

  return result;
}

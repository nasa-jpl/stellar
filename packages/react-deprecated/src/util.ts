function gen4() {
  return Math.random().toString(16).slice(-4);
}

export function simpleUniqueId(prefix: string = "") {
  return `${prefix}${[gen4(), gen4(), gen4(), gen4()].join("-")})`;
}

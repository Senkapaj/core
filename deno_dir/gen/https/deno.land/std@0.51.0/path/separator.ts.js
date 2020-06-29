// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
const isWindows = Deno.build.os == "windows";
export const SEP = isWindows ? "\\" : "/";
export const SEP_PATTERN = isWindows ? /[\\/]+/ : /\/+/;
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/std@0.51.0/path/separator.ts.js.map
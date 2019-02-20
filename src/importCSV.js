import converter from 'json-2-csv';
import fs from 'fs';
import path from 'path';

export default async () => {
  const result_file_path = path.join(__dirname, './data/result.csv');
  const buffer = fs.readFileSync(result_file_path);
  return await converter.csv2jsonAsync(buffer.toString());
}
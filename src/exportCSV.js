import converter from 'json-2-csv';
import fs from 'fs';
import path from 'path';

const createDataDirectory = () => {
  fs.mkdirSync(path.join(__dirname, './data'));
}

export default async (JsonArr) => {
  const result = await converter.json2csvAsync(JsonArr);
  createDataDirectory();
  const result_file_path = path.join(__dirname, './data/result.csv');
  await fs.writeFile(result_file_path, new Buffer(result), { encoding: 'utf-8' }, (err) => {
    if (err) {
      console.log('error: create csv_file', err);
      throw err;
    }
  });
} 
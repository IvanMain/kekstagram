import { TYPES_FILE } from '../const/const';

const validationTypeFile = (file) => TYPES_FILE.some((type) => file.name.endsWith(type));

export { validationTypeFile };

import { createServer, IncomingMessage, ServerResponse } from 'http';
import * as queryString from 'query-string';
import * as url from 'url';
import * as fs from 'fs';

const port = 5000;
const server = createServer((req: IncomingMessage, res: ServerResponse) => {});
import { Analyzer } from './crawller';

export default class JennyAnalyzer implements Analyzer {
  public analyze(html: string, filePath: string) {
    return html;
  }
}

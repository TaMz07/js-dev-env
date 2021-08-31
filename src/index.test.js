import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test' , () => {
  it('Should pass' , () => {
    expect(true).to.equal(true)
  });
});

describe('index.html', () => {
  it('Should say Hi', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const p = dom.window.document.getElementsByTagName('p')[0];
    expect(p.innerHTML).to.equal('Hi')
    dom.window.close()
  });

});

const chai = require('chai');
const expect = chai.expect;

const Box = require('../src/Box');

describe('Box', () => {
  it('should equal true', () => {
  
    expect(true).to.be.equal(true);
  });

  it('should have a height of 100', () => {
    const box = new Box();

    expect(box.height).to.equal(100);
  });

  it('should have a width of 100', () => {
    const box = new Box();

    expect(box.width).to.equal(100);
  })

  it('should be able to have dynamic heights and widths', () => {
    const box = new Box(20, 40);

    expect(box.height).to.equal(20);
    expect(box.width).to.equal(40);
  })

  it('should be able to calculate the area of the box', () => {
    const box = new Box(20, 40);

    expect(box.area()).to.equal(800)
  })

  it('should be able to increase height or width', () => {
    const box = new Box(20, 40);

    box.increaseSize(10, 'width')
    expect(box.width).to.equal(50)

    box.increaseSize(10, 'height');
    expect(box.height).to.equal(30)
  })
})
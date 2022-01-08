
class ThirdsGrid {
  constructor({
    padding,
    canvasWidth,
    canvasHeight,
  }){
    this.padding = padding;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.sectionWidth = this.canvasWidth / 3;
    this.sectionHeight = this.canvasHeight / 3;
  }

  addPadding(n){
    return n + this.padding;
  }

  display() {
    console.log('display ThirdsGrid', {
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
      sectionWidth: this.canvasWidth / 3,
      sectionHeight: this.canvasHeight / 3,
    })

    for(var i = 1; i <= 2; i++) {
      line(
        this.addPadding(this.sectionWidth),
        this.addPadding(0),
        this.addPadding(this.sectionWidth),
        this.addPadding(this.canvasHeight)
      );
      line(
        this.addPadding(this.sectionWidth * 2),
        this.addPadding(0),
        this.addPadding(this.sectionWidth * 2),
        this.addPadding(this.canvasHeight)
      );

      line(
        this.addPadding(0),
        this.addPadding(this.sectionHeight),
        this.addPadding(this.canvasWidth),
        this.addPadding(this.sectionHeight)
      );

      line(
        this.addPadding(0),
        this.addPadding(this.sectionHeight * 2),
        this.addPadding(this.canvasWidth),
        this.addPadding(this.sectionHeight * 2)
      );

    }
  }

  getSections() {
    var sections = [];
    for(var c=0; c < 3; c++) {
      for(var r=0; r < 3; r++) {
        sections.push({
          pos: [c,r],
          x: this.addPadding(this.sectionWidth * r),
          y: this.addPadding(this.sectionHeight * c),
          width: this.sectionWidth,
          height: this.sectionHeight
        });
      }
    }
    return sections;
  }
}

export default ThirdsGrid;
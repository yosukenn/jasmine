describe('Jasmineの基本', function() {
  var area;

  beforeEach(function() {
    area = new MyArea(10, 5);
  });

  afterEach(function() {
    // 終了処理
  });

  it('getTriangleのメソッドテスト', function() {
    expect(area.getTriangle()).toEqual(25);
  });

  it('getSquareのメソッドテスト', function() {
    expect(area.getSquare() === 50).toBeTruthy();
  });
});

import ErrorRepository from '../errorRepository';
test('errorRepository success', () => {
  function success() {
    const errorRepository = new ErrorRepository();
    return errorRepository.translate(1)
  }
  expect(success()).toEqual("Error 1");
});

test('errorRepository fail', () => {
  function fail() {
    const errorRepository = new ErrorRepository();
    return errorRepository.translate(15)
  }
  expect(fail()).toEqual("Unknown error");
});

export function sum(accumulator, a) {
  return accumulator + a;
}

export function groupByItem(array) {
  return array.reduce((acc, val) => {
    let index = acc.findIndex(item => item.title === val.title);
    return (
      index === -1 ? acc.push({ times: 1, ...val }) : acc[index].times++, acc
    );
  }, []);
}

function wrapping(gifts) {
  let wrappedGifts = gifts.map((gift) => {
    let wrapped = "";
    let count = 0;
    while (count < gift.length + 2) {
      wrapped += "*";
      count++;
    }
    return `${wrapped}\n*${gift}*\n${wrapped} `;
  });
  return wrappedGifts;
}

console.log(wrapping(["socks"]));

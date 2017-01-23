let box = {
locked: true,
unlock: function() { this.locked = false; },
lock: function() { this.locked = true; },
_content: [],
get content() {
  if (this.locked) throw new Error("Заперто!");
  return this._content;
  }
};

function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked)
    return body();

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
box.content.push("золотишко");
});

try {
withBoxUnlocked(function() {
throw new Error("Пираты на горизонте! Отмена!");
});
} catch (e) {
console.log("Произошла ошибка:", e);
}
console.log(box.locked);
// → true

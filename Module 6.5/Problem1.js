// Grading System
// 0 - 39 = c
// 40 - 59 = B
// 60 - 69 = A-
// 70 - 79 = A
// 80-100 = A+

var result = 80;

if (result < 0) {
  console.log("failed");
} else if (result >= 0 && result < 40) {
  console.log("tumi C grade paico");
} else if (result >= 40 && result < 60) {
  console.log("tumi B grade paico");
} else if (result >= 60 && result < 70) {
  console.log("tumi A- grade paico");
} else if (result >= 70 && result < 80) {
  console.log("tumi A grade paico");
} else if (result >= 80 && result <= 100) {
  console.log("tumi A+ grade paico");
} else {
  console.log("invalid");
}

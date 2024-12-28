export default function getRandomColor() {
    const colors = ['rgb(228, 169, 169)', 'rgb(120, 219, 145)', 'rgb(95, 126, 228)', 'rgb(235, 236, 145)', 'rgb(241, 172, 67)'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
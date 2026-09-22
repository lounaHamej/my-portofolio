function showPositiveMessage() {
const messages =[
    " 'the secret of getting ahead is getting started.' - you're doing amazing!",
    " 'Cod is like humor. When you have to explain it, it's bad.' keep building you path!",
    " Every expert developer was once a beginner who never gave up. keep going!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messagesElement = document.getElementById("msg");
    messagesElement.innerText = messages[randomIndex];
}
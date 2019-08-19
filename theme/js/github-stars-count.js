(function() {

    function Star(props) {
        return React.createElement('img', {src: props.url, className: "github-stars-count-image"});
    }

    function Counter(props) {
        return React.createElement('span', {className: "github-stars-count-counter"}, props.count);
    }

    function GithubStars(props) {
        let [count, setCount] = React.useState(0);

        fetch(`https://api.github.com/repos/${props.repositoryUrl.replace('https://github.com/', '')}/stargazers`)
            .then(response => response.json())
            .then(stargazers => stargazers.length)
            .then(stargazersCount => setCount(stargazersCount))

        return React.createElement('div', {className: "github-stars-count", onClick: () => window.open(props.repositoryUrl, '_blank')}, [
            React.createElement(Star, {url: props.starImageUrl}),
            React.createElement(Counter, {count: count}),
        ]);
    }


    const holder = document.getElementById('github-stars-holder');
    ReactDOM.render(
        React.createElement(GithubStars, {...holder.dataset}),
        holder,
    );
})();
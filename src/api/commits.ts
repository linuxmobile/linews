export const getCommits = async (): Promise<any> => {
	const data = await fetch(
		`https://api.github.com/repos/linuxmobile/linews/commits?per_page=12`,
		{
			headers: {
				Authorization: `token ${import.meta.env.GITHUB_TOKEN}`
			}
		}
	).then((res) => res.json())

	return data
}
/* const renderCommits = (commit: any) => {
	const { sha, commit: commitData, html_url } = commit
	const { message, author } = commitData
	const { name } = author
	return `
		<div class="repo">
			<div class="repo__header">
				<h3 class="repo__title">${message}</h3>
			</div>
			<div class="repo__body">
				<p class="repo__author">${name}</p>
				<p class="repo__sha">${sha}</p>
			</div>
			<a href="${html_url}" class="repo__link">View on GitHub</a>
		</div>
	`
} */
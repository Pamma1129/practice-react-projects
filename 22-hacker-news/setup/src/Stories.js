import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
	const { isLoading, hits, page, nbPages, removeStory } = useGlobalContext();
	console.log(isLoading, hits, page, nbPages);

	if (isLoading) {
		return <div className='loading'></div>;
	}
	return (
		<section className='stories'>
			{hits.map(story => {
				const { title, objectID, author, url, num_comments, points } = story;
				return (
					<article key={objectID} className='story'>
						<h4 className='title'>{title}</h4>
						<p className='info'>
							{points} points by <span>{author} | </span>
							{num_comments} comments
						</p>
						<div>
							<a
								href={url}
								className='read-link'
								target='_blank'
								rel='noopener noreferrer'>
								read more{' '}
							</a>
							<button
								onClick={() => removeStory(objectID)}
								className='remove-btn'>
								remove
							</button>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;

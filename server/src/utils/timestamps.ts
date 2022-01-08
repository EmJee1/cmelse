interface ITimestamps {
	createdAt?: Date
	updatedAt?: Date
}

/**
 * Returns createdAt and updatedAt timestamps for database interactions
 * @param createdAt whether to add createdAt timestamp
 * @param updatedAt whether to add updatedAt timestamp
 * @returns {ITimestamps}
 */
const timestamps = (createdAt = true, updatedAt = true) => {
	const out: ITimestamps = {}

	if (createdAt) out.createdAt = new Date()
	if (updatedAt) out.updatedAt = new Date()

	return out
}

export default timestamps

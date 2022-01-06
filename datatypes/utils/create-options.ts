import createDatabaseKeySlug from 'server/src/utils/create-slug'
import { IDatatypeOptions } from '../interfaces/interfaces'

/**
 * Function that parses a partially filled object to a object that has all required fields.
 * Generates the databaseKey if not provided by slugifying the displayTitle.
 * @param options The partially filled options object
 * @returns The filled options object
 */
export const parseOptions = <T extends IDatatypeOptions>(
	options: T
): Required<T> =>
	({
		...options,
		databaseKey:
			options.databaseKey ?? createDatabaseKeySlug(options.displayTitle),
	} as Required<T>)

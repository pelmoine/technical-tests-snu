import { useCallback } from 'react';
import api, { API_DEFAULT_PARAMS } from '../../helpers/api-helper';
/**
 * Think about debounce
 * Display Warning message when length sup 100
 */
export const SearchBar = ({ setResult }) => {
  const handleOnChange = useCallback(
    async (event) => {
      event.preventDefault();
      const search = event.target.value;
      const results = await api.get('/', {
        params: { ...API_DEFAULT_PARAMS, q: search },
      });
      setResult(results.data.hits);
    },
    [setResult]
  );
  return (
    <>
      <div className='w-full relative mb-2'>
        <input
          type='search'
          id='default-search'
          className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Recherche une image...'
          required=''
          onChange={handleOnChange}
          maxLength={100}
        />
      </div>
    </>
  );
};

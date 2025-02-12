import { apiFetch } from './apiFetch';

export async function getData(
    companie: string,
    query: string = ''
) {

    const url = `${companie}?${query}`;

    const data = await apiFetch(url);
    console.log(data);
    return data;
}
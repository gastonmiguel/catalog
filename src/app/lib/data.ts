import { apiFetch } from './apiFetch';

export async function getData(
    companie: string,
    params : {} = {}
) {

    const queryParams = new URLSearchParams(params);
    const url = `${companie}?${queryParams.toString()}`;

    console.log(url);

    const data = await apiFetch(url);
    console.log(data);
    return data;

}
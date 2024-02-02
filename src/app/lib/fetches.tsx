import 'server-only'

export const fetchProfileData = async () => {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch('http://127.0.0.1:5000/personal-website/123');
    if (!res.ok) {
        console.log('FAILURE');
        const result = res.json();
        console.log(result);
        return result;
    } else {
        console.log('SUCCESS');
        const data = await res.json();
        console.log(data);
        return data;
    }
}
export const fetchProfileData = async () => {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/all-agents/Barack_Obama/monthly/2016010100/2016123100');
    const actualData = {
        name: 'Nachmi Kott'
    }
    
    if (!res.ok) {
        console.log('FAILURE');
        const result = res.json();
        return actualData;
    } else {
        console.log('SUCCESS');
        const data = await res.json();
        return actualData;
    }
}
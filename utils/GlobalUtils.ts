const openLink = (link: string) => {
    window.open(link, '_blank');
}

const getDeviceSize = (): string => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width >= 0 && width < 300) return 'xm';
        if (width >= 300 && width < 480) return 'sm';
        if (width >= 480 && width < 640) return 'md';
        if (width >= 640 && width < 768) return 'lg';
        if (width >= 768 && width < 1024) return 'xl';
    }
    return 'xl';
}

export {
    openLink,
    getDeviceSize
}
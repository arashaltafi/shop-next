const openLink = (link: string) => {
    window.open(link, '_blank');
}

const openMail = (email: string) => {
    try {
        window.open(`mailto:${email}`);
    } catch (error: any) {
        console.error(error.message)
        // dispatch(snackBarSlice.actions.setSnackBar({
        //     isOpen: true,
        //     message: 'متاسفانه دستگاه شما از این قابلیت پشتیبانی نمی کند',
        //     type: 'error',
        // }))
    }
}

const openPhone = (phone: string) => {
    try {
        window.open(`tel:${phone}`);
    } catch (error: any) {
        console.error(error.message)
        // dispatch(snackBarSlice.actions.setSnackBar({
        //     isOpen: true,
        //     message: 'متاسفانه دستگاه شما از این قابلیت پشتیبانی نمی کند',
        //     type: 'error',
        // }))
    }
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
    openMail,
    openPhone,
    getDeviceSize
}
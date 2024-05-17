"use client"

import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';

const BottomBar = () => {
    const [page, setPage] = useState(0);
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        switch (pathName) {
            case "/":
                setPage(0);
                break;
            case "/basket":
                setPage(1);
                break;
            case "/blog":
                setPage(2);
                break;
            case "/profile":
                setPage(3);
                break;
            default:
                setPage(0);
                break;
        }
    }, [pathName]);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
        switch (newValue) {
            case 0:
                router.push("/");
                break;
            case 1:
                router.push("/basket");
                break;
            case 2:
                router.push("/blog");
                break;
            case 3:
                router.push("/profile");
                break;
            default:
                router.push("/");
                break;
        }
    };

    const [bottomAction, setBottomAction] = useState<{
        label: string;
        value: number;
        icon: JSX.Element;
    }[]>();

    useEffect(() => {
        setBottomAction(
            [
                {
                    label: "فروشگاه",
                    value: 0,
                    icon: <AddShoppingCartOutlinedIcon />
                }, {
                    label: "سبد خرید",
                    value: 1,
                    icon: <ShoppingCartOutlinedIcon />
                }, {
                    label: "بلاگ",
                    value: 2,
                    icon: <CoffeeMakerOutlinedIcon />
                },
                {
                    label: "پروفایل",
                    value: 3,
                    icon: <PersonOutlinedIcon />
                }
            ]
        );
    }, []);

    return (
        <BottomNavigation
            showLabels={false}
            className='py-4 sm:py-6 md:py-8 px-8 sm:px-12 md:px-16 fixed bottom-0 w-full mx-auto border-t-[1px] border-solid border-brown-500 z-50'
            sx={{
                display: 'none',
                backgroundColor: '#43302b',
                "& button": {
                    color: "#bfa094"
                },
                "& .MuiSvgIcon-root": {
                    width: '5rem'
                },
                '@media (max-width: 480px)': {
                    "& .MuiSvgIcon-root": {
                        width: '4rem'
                    },
                    "& .MuiBottomNavigationAction-label": {
                        width: '4rem',
                        fontSize: '12px'
                    }
                },
                '@media (max-width: 768px)': {
                    display: 'flex'
                },
                "& .Mui-selected ": {
                    color: '#e0cec7',
                    "& .MuiSvgIcon-root": {
                        color: '#e0cec7'
                    },
                },
                "& .MuiBottomNavigationAction-label": {
                    width: '5rem',
                    fontFamily: "iranYekan-normal, vazir-normal, vazir-medium, morvarid, Cambria, Cochin, Georgia, Times, serif, sans-serif, monospace"
                }
            }}
            value={page}
            onChange={handleChange}
        >
            {
                bottomAction?.map((action, index) => (
                    <BottomNavigationAction
                        key={index}
                        label={action.label}
                        value={action.value}
                        icon={action.icon}
                    />
                ))
            }
        </BottomNavigation>
    )
}

export default BottomBar
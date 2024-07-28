"use client"

import React from 'react'
import { useSuspenseQuery } from "@apollo/client";
import { GET_USER } from "@/utils/graphql-queries";

const Data = () => {
    const { data, error } = useSuspenseQuery(GET_USER, {
        variables: { id: 11 },
    });

    if (error) return (<p>error: {error.message}</p>)

    console.log(data)

    return (
        <div>
            <h1>users</h1>
            {
                <p>user; {JSON.stringify(data.user)}</p>
            }
        </div>
    )
}

export default Data
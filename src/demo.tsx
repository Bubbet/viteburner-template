import { NS } from "@ns";
import React from 'react';

export async function main(ns: NS): Promise<void> {
    ns.clearLog();
    ns.tail();
    ns.printRaw(<span style={{color: 'rgb(255, 30, 8)', backgroundColor: 'rgb(255, 255, 255)', width: '100%'}}>Hello there!</span>)
}
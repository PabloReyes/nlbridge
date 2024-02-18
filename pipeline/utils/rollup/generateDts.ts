import {RollupOptions} from 'rollup';
import dts from 'rollup-plugin-dts';

export const generateDts = (
    fileName: string,
    folderName: string,
    isProduction: boolean,
    sourceFile = './src/index.ts',
): RollupOptions => {
    const folder = isProduction ? 'prod' : 'dev';
    const path = `../../../dist/${folder}/${folderName}`;
    return {
        input: sourceFile,
        logLevel: 'silent',
        plugins: [
            dts(),
        ],
        output: {
            file: `${path}/${fileName}.d.ts`,
        },
    };
};

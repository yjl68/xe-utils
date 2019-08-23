/**
 * 从树结构中根据回调查找数据
 * @param {Object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {Object} options {children: 'children'}
 * @param {Object} context 上下文
 */
export declare function searchTree(array: Array<any>, iterate: Function, options?: object, context?: any): Array<any>;

export default searchTree
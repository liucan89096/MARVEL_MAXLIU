/**
 * @Author: Max LIU
 * @Date: 2017/2/16
 * @Last_Modified_by: Max LIU
 * @Last_Modified_time: 2017/2/16
 * @Description: The Comic class
 */

export class Comic {
  id: number;
  title: string;
  pageCount: number;
  onsaleDate: string;
  creators: Array<any>;
  price: number;
  description: string;
  series: any;
  thumbnail: any;
  url: string;
}

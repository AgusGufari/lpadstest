class t extends Intl.NumberFormat{formatNoSpace(a){return this.format(a).replaceAll(/\s/g,"")}}const r=new t("id-ID",{style:"currency",currency:"IDR"}),c=new t("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}),o=new Intl.NumberFormat("id-ID"),s=e=>e.charAt(0).toLocaleUpperCase("ID")+e.slice(1),m=e=>e.split(" ").map(a=>a.charAt(0).toLocaleUpperCase("ID")+a.slice(1)).join(" ");export{o as F,c as I,s as a,r as b,m as c};

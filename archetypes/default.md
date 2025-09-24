---

date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName "-" " " | title }}'

summary: ""

categories: [""]
tags: [""]
author: "Trieu Hai Vo"

cover: ""

lightbox:
  enabled: true
justified_gallery:
  enabled: true

# jpegoptim --max=50 *.jpg # Nén ảnh

---

## Heading

![]()

---



---



---

{{< masonry columns=3 gutter=15 >}}

<!-- Thêm vào cuối { width=300 height=200 } -->

{{< /masonry >}}
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!";

client.login("<YOUR TOKEN>");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)

  client.user.setPresence({
  status: "idle",
  game: {
    name: "M Shop Kit",
    type: "WATCHING"
  }
  });
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
      return
    }

    var getUser = receivedMessage.author.toString() + ' ';

     const cancelexecute = new Discord.MessageEmbed()
     .setTitle(`Warning`)
     .setDescription(`Bạn không thể thực hiện được câu lệnh này.`)
     .setColor('#336EFF');


     if (receivedMessage.content === `${prefix}infor`) {
    		if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
    			return receivedMessage.channel.send(cancelexecute)
		   const test3 = new Discord.MessageEmbed()
		   .setTitle(`SHOP KIT`)
       .setDescription('\u200b')
       .setImage(`https://media.discordapp.net/attachments/759408961811251260/770144396486115338/2020-10-26_11.38.03.png?width=909&height=481`)

	   .addFields({ name: `Thanh Toán`, value: `Hãy liên hệ với Moonz#0001 để thanh toán qua thẻ điện thoại.`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `Hình Thức Nhận Hàng`, value: `Ra spawn để nhận hàng hoặc nhận hàng ở toạ độ nào đó (ưu tiên spawn).`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `Đặt Hàng`, value: `Hãy liên hệ với chủ shop. (chưa nhận)`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `Quyền hạn`, value: `Nếu mua nhiều bạn sẽ nhận được một cấp bậc riêng biệt.`, inline: false})
       .addFields({ name: '\u200b', value: '\u200b' })
       .addFields({ name: `\u200b`, value: `Đã cập nhật 02/01/2021.`, inline: false})


		   .setColor('#336EFF');

		     receivedMessage.channel.send(test3)
		     receivedMessage.delete();
	}

    // infor
    if (receivedMessage.content === `${prefix}update`) {
       if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
         return receivedMessage.channel.send(cancelexecute)


      receivedMessage.channel.send("> Đã cập nhật lại shop ngày 17/11.")
      receivedMessage.delete();

    }
    if (receivedMessage.content === `${prefix}chat`) {
       if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
         return receivedMessage.channel.send(cancelexecute)
      const test3 = new Discord.MessageEmbed()
      .setTitle(`Information`)
      .setDescription(`Kênh chat tổng của discord.`)

      //.setImage("http://i.imgur.com/yVpymuV.png")


      .setColor('#336EFF');

      receivedMessage.channel.send(test3)
      receivedMessage.delete();

    }

      if (receivedMessage.content === `${prefix}rate`) {
         if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
           return receivedMessage.channel.send(cancelexecute)
        const test3 = new Discord.MessageEmbed()
        .setTitle(`Information`)
        .setDescription(`Đánh giá sau khi mua hàng, khi mua bạn có thể đánh giá.`)

        .addFields({ name: `nhận Role Riêng`, value: `Nếu mua nhiều bạn sẽ nhận được một role đặc biệt.`, inline: false})
        //.setImage("http://i.imgur.com/yVpymuV.png")


        .setColor('#336EFF');

        receivedMessage.channel.send(test3)
        receivedMessage.delete();

      }
		// pvp kit
		if (receivedMessage.content === `${prefix}cpvp`) {
           if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
             return receivedMessage.channel.send(cancelexecute)
          const kit1 = new Discord.MessageEmbed()
          // Tên và thông tin
          .setTitle(`PvP Kit V2`)
          .setDescription(`Khi mua bạn sẽ được tặng 2 kit pvp resource.`)
          // Ảnh
          .setImage('https://cdn.discordapp.com/attachments/773443430650478593/794880637446258718/unknown.png')
          // Bỏ hàng
          .addFields({ name: '\u200b', value: '\u200b' })
          // Giá tiền
          .addFields({ name: `Giá: 40.000 VNĐ`, value: `\u200b`, inline: false})
          // Màu embed
          .setColor('#336EFF');

          receivedMessage.channel.send(kit1)
          receivedMessage.delete();

        }
		if (receivedMessage.content === `${prefix}fo`) {
           if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
             return receivedMessage.channel.send(cancelexecute)
          const kit1 = new Discord.MessageEmbed()
          // Tên và thông tin
          .setTitle(`Foundation Kit`)
          .setDescription(`Khi mua bạn sẽ được tặng Kit Totem và Gapple.`)
          // Ảnh
          .setImage('https://cdn.discordapp.com/attachments/773443430650478593/794880637446258718/unknown.png')
          // Bỏ hàng
          .addFields({ name: '\u200b', value: '\u200b' })
          // Giá tiền
          .addFields({ name: `Giá: 40.000 VNĐ`, value: `\u200b`, inline: false})
          // Màu embed
          .setColor('#336EFF');

          receivedMessage.channel.send(kit1)
          receivedMessage.delete();

        }
        // resrouce
		if (receivedMessage.content === `${prefix}res`) {
           if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
             return receivedMessage.channel.send(cancelexecute)
          const kit1 = new Discord.MessageEmbed()
          // Tên và thông tin
          .setTitle(`PvP Resource`)
          .setDescription(`Tài nguyên pvp crystal.`)
          // Ảnh
          .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/794881509202722856/unknown.png`)
          // Bỏ hàng
          .addFields({ name: '\u200b', value: '\u200b' })
          // Giá tiền
          .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
          // Màu embed
          .setColor('#336EFF');

          receivedMessage.channel.send(kit1)
          receivedMessage.delete();

        }
        if (receivedMessage.content === `${prefix}pvpcry`) {
           if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
             return receivedMessage.channel.send(cancelexecute)
          const kit1 = new Discord.MessageEmbed()
          // Tên và thông tin
          .setTitle(`PvP Crystal Kit`)
          .setDescription(`Kit chuyên dành cho pvp crystal, nó rất phù hợp cho dân chuyên dùng crystal.`)
          // Ảnh
          .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/776015919579004948/unknown.png`)
          // Bỏ hàng
          .addFields({ name: '\u200b', value: '\u200b' })
          // Giá tiền
          .addFields({ name: `Giá: 30.000 VNĐ`, value: `\u200b`, inline: false})
          // Màu embed
          .setColor('#336EFF');

          receivedMessage.channel.send(kit1)
          receivedMessage.delete();

        }
        if (receivedMessage.content === `${prefix}kitpvp1`) {
           if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
             return receivedMessage.channel.send(cancelexecute)
          const kit1 = new Discord.MessageEmbed()
          // Tên và thông tin
          .setTitle(`Orange Kit V1`)
          .setDescription(`Hai bộ Giáp, Cúp và Kiếm của TheGreatWall. Kèm với 6 Totem và một ít Obsidian, nên mua V2 sẽ ngon hơn.`)
          // Ảnh
          .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773445651572588544/unknown.png`)
          // Bỏ hàng
          .addFields({ name: '\u200b', value: '\u200b' })
          // Giá tiền
          .addFields({ name: `Giá: 30.000 VNĐ`, value: `\u200b`, inline: false})
          // Màu embed
          .setColor('#336EFF');

          receivedMessage.channel.send(kit1)
          receivedMessage.delete();

        }
        if (receivedMessage.content === `${prefix}kitpvp2`) {
           if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
             return receivedMessage.channel.send(cancelexecute)
          const kit1 = new Discord.MessageEmbed()
          // Tên và thông tin
          .setTitle(`Orange Kit V2`)
          .setDescription(`Hai bộ Giáp, Cúp và Kiếm của TheGreatWall. Kèm với 6 Totem và 3st Kinh Nghiệm, có thể sẽ có V3.`)
          // Ảnh
          .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773446476855771146/unknown.png`)
          // Bỏ hàng
          .addFields({ name: '\u200b', value: '\u200b' })
          // Giá tiền
          .addFields({ name: `Giá: 40.000 VNĐ`, value: `\u200b`, inline: false})
          // Màu embed
          .setColor('#336EFF');

          receivedMessage.channel.send(kit1)
          receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}kitpearl`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Ender Pearl Kit`)
            .setDescription(`Có thể nó sẽ giúp bạn để chạy thoát khỏi một cuộc thảm xác.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773447691808145408/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 30.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}apple`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Golden Apple Kit`)
            .setDescription(`Quả táo cường hoá, cho bạn nhiều hiệu ứng có lợi và giúp bạn sống sót.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773448370877497344/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}totem`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Totem Kit`)
            .setDescription(`Cho bạn mạng sống thứ hai nếu máu của bạn là 0.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773448877712998421/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}xp`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`XP Kit`)
            .setDescription(`Đập ra kinh nghiệm, không vô dụng đâu. Nó sẽ giúp bạn sửa giáp trong khi đang đánh nhau và tăng vài cấp độ.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773448915239567400/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}cry`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`End Crystal Kit`)
            .setDescription(`Dùng nó để pvp crystal, đặc biệt là dành cho dân pvp bằng crystal.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773452863753682964/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 25.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}bow`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Bow Man Kit`)
            .setDescription(`Cung thủ, với mũi tên tăng thêm sát thương và một ít mũi tên thường. Chứng minh bạn là một thiện xạ bắn cung.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773777588031062017/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 25.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }

          if (receivedMessage.content === `${prefix}inf`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Infnity Kit`)
            .setDescription(`Một kit thuộc sở hữu của TheGreatWall, đầy đủ dụng cụ cần thiết, thuận lợi cho việc xây dựng và sử dụng.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773795742757945364/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 30.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}inf2`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Infinity Kit V2`)
            .setDescription(`Bản nâng cấp của infinity kit.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773795890137530388/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 30.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }

          // grief
          if (receivedMessage.content === `${prefix}wither`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Grief Kit`)
            .setDescription(`Wither kèm với một bộ giáp xịn xò và cùng một ít TNT.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773444562491932672/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}tnt`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`TNT Kit`)
            .setDescription(`Sử dụng nó để raid base ai đó hoặc phá bất kì thứ gì bạn muốn.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773802383121055764/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }

          // block
          if (receivedMessage.content === `${prefix}obs`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Obsidian Kit`)
            .setDescription(`Xây dựng một thứ gì đó to lớn hoặc ý nghĩa cho bạn. Ngoài ra còn có thể dùng để pvp crystal.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773449926658097162/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}sponge`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Sponge Kit`)
            .setDescription(`Tát nước thuỷ cung yaaaa, có lẻ là vậy. Nó sẽ giúp bạn dọn hết nước xung quanh nhanh chống`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773450513924358164/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 10.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          // other

          if (receivedMessage.content === `${prefix}saddle`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Saddle Kit`)
            .setDescription(`Yên cuõi bình thường, nhưng là một shulker full.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773784511266947092/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 10.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}tool`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Tools Kit`)
            .setDescription(`Đầy đủ dụng cụ để xây dựng. Cúp với dòng cường hoá Fortune và Silk Touch.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/776018228723449856/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }
          if (receivedMessage.content === `${prefix}fw`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(`Firework Kit`)
            .setDescription(`Pháo hoa hỗ trợ cho việc di chuyển bàng cánh.`)
            // Ảnh
            .setImage(`https://cdn.discordapp.com/attachments/773443430650478593/773802317879312384/unknown.png`)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: 20.000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }

          if (receivedMessage.content === `${prefix}exam`) {
             if(!receivedMessage.guild.member(receivedMessage.author).hasPermission("MANAGE_CHANNELS"))
               return receivedMessage.channel.send(cancelexecute)
            const kit1 = new Discord.MessageEmbed()
            // Tên và thông tin
            .setTitle(``)
            .setDescription(``)
            // Ảnh
            .setImage(``)
            // Bỏ hàng
            .addFields({ name: '\u200b', value: '\u200b' })
            // Giá tiền
            .addFields({ name: `Giá: .000 VNĐ`, value: `\u200b`, inline: false})
            // Màu embed
            .setColor('#336EFF');

            receivedMessage.channel.send(kit1)
            receivedMessage.delete();

          }



});
